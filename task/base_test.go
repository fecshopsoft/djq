package task

import (
	"testing"
	"time"
	"mimi/djq/cache"
	"fmt"
	"mimi/djq/dao"
	"mimi/djq/dao/arg"
	"mimi/djq/db/mysql"
	"mimi/djq/model"
	"mimi/djq/util"
)

func TestCheckPayingOrder(t *testing.T) {
	go CheckPayingOrder()
	time.Sleep(time.Hour)
}

func TestCloseCanceledOrder(t *testing.T) {
	err := cache.Set("mimi:name", "mimiName", time.Hour * 1)
	checkErr(err)
	value,err := cache.Get("mimi:name")
	checkErr(err)
	fmt.Println(value)
	list, err := cache.FindKeys("mimi:*")
	checkErr(err)
	fmt.Println(len(list))
	for _, obj := range list {
		fmt.Println(obj)
		_, err = cache.Expire(obj, time.Minute)
		checkErr(err)
		t, err := cache.GetExpire(obj)
		fmt.Println(t)
		checkErr(err)
		value, err := cache.Get(obj)
		checkErr(err)
		fmt.Println(value)
		_, err = cache.Del(obj)
		checkErr(err)

		_, err = cache.Expire(obj, time.Minute * 30)
		checkErr(err)
		t, err = cache.GetExpire(obj)
		fmt.Println(t)
	}
	list, err = cache.FindKeys("mimi:")
	checkErr(err)
	fmt.Println(len(list))
}

func checkErr(err error) {
	if err != nil {
		fmt.Println(err)
	}
}

func TestParseTimeFromDB2(t *testing.T) {
	conn,_ := mysql.Get()
	defer mysql.Rollback(conn)
	daoObj := &dao.CashCouponOrder{conn}
	argObj := &arg.CashCouponOrder{}
	argObj.PageSize = 1
	list,_ := dao.Find(daoObj,argObj)
	obj := list[0].(*model.CashCouponOrder)
	t.Log(obj.PayBegin)
	obj.PayBegin = util.StringDefaultTime4DB()
	_,err := dao.Update(daoObj,obj,"payBegin")
	if err!=nil{
		t.Error(err)
	}else{
		t.Log(obj.PayBegin)
	}
}