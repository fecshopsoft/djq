package service

import (
	"database/sql"
	"github.com/pkg/errors"
	"log"
	"mimi/djq/dao"
	"mimi/djq/dao/arg"
	"mimi/djq/db/mysql"
	"mimi/djq/model"
	"mimi/djq/util"
)

type User struct {
}

func (service *User) GetDaoInstance(conn *sql.Tx) dao.BaseDaoInterface {
	return &dao.User{conn}
}

func (service *User) SharedActionResponse(id string) (err error) {
	if id == "" {
		err = ErrIdEmpty
		log.Println(err)
		return
	}
	conn, err := mysql.Get()
	if err != nil {
		err = checkErr(err)
		log.Println(err)
		return
	}
	rollback := false
	defer mysql.Close(conn, &rollback)
	daoObj := service.GetDaoInstance(conn)
	userO, err := dao.Get(daoObj, id)
	if err != nil {
		rollback = true
		err = checkErr(err)
		log.Println(err)
		return
	}
	user := userO.(*model.User)
	if user.Shared {
		rollback = true
		return
	} else {
		user.Shared = true
		user.PresentChance = user.PresentChance + 1
		_, err = dao.Update(daoObj, user, "shared", "presentChance")
		if err != nil {
			rollback = true
			err = checkErr(err)
			log.Println(err)
			return
		}
	}
	return
}

func (service *User) Register(obj *model.User) (user *model.User, err error) {
	user = obj
	if obj == nil {
		err = ErrUnknown
		log.Println(ErrObjectEmpty)
		return
	}
	if !util.MatchMobile(obj.Mobile) {
		err = util.ErrMobileFormat
		return
	}
	conn, err := mysql.Get()
	if err != nil {
		err = checkErr(err)
		log.Println(err)
		return
	}
	rollback := false
	defer mysql.Close(conn, &rollback)
	daoObj := service.GetDaoInstance(conn)
	argObj := &arg.User{}
	argObj.MobileEqual = obj.Mobile
	list, err := dao.Find(daoObj, argObj)
	if err != nil {
		rollback = true
		err = checkErr(err)
		log.Println(err)
		return
	}
	if len(list) == 0 {
		_, err = dao.Add(daoObj, user)
		if err != nil {
			rollback = true
			err = checkErr(err)
			log.Println(err)
			return
		}
	} else {
		user = list[0].(*model.User)
		if user.Locked {
			err = errors.New("用户被锁定，请联系管理员")
			return
		}
	}
	return
}

func (service *User) check(obj *model.User) error {
	if obj == nil {
		return ErrObjectEmpty
	}
	if !util.MatchMobile(obj.Mobile) {
		return util.ErrMobileFormat
	}
	if err := util.MatchNonnegativeNumberWithErr(obj.PresentChance, "抽奖次数"); err != nil {
		return err
	}
	return nil
}

func (service *User) CheckUpdate(obj model.BaseModelInterface) error {
	if obj != nil && obj.GetId() == "" {
		return ErrIdEmpty
	}
	return service.check(obj.(*model.User))
}

func (service *User) CheckAdd(obj model.BaseModelInterface) error {
	return service.check(obj.(*model.User))
}
