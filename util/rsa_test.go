package util

import (
	"testing"
	"encoding/base64"
)

func TestRsaEncrypt(t *testing.T) {
	str := "mimi"
	result, err := RsaEncrypt([]byte(str))
	if err != nil {
		t.Error(err)
	} else {
		source, err := RsaDecrypt(result)
		if err != nil {
			t.Error(err)
		} else {
			t.Log(str)

			t.Log(base64.StdEncoding.EncodeToString(result))
			t.Log(string(source))
		}
		//st1 := ""DDXBau1YPtCosH5vbcjZV8p4WctUEnuFfqbBNeTqYzLRkEkxGMfKL9yIvqA8P4uMgucNROAEVUJqj2UI76pIKbHLkw2i+GI4fw+Ju+0pAFspCVyCHU8Vg3aTRSDYsRpHDGJStsIZ7F7INsrvkAejlVfGsezqcqpqYCq9xadpgk0=""
		//st1 := "C3vP8uSSYrTEytroUCAVdCFFr/wObpLYCD+v1fO3Umr+QYwisXTWI6ysjk3zlJ0TlwmAWHxXqnvYcAERziXPeeahFb+Y4E7WlfpzMqVGbgAyjcdZsd7T/SDmyzIjmkLgBAnFReQm0WT+m89q6ux6I5UHuNXhus/F8WAHD6RuypY="
		st1 := "Mx4UBPf8Mg7wx21Y7MrNkhBiU9nESsCq8kOavhDgXgtgGOpc6bjpM6r3KW+IrG6KFrucrJMCMoB4DVpJnNEJvqrIfBi5nwv4wVsgZDvz8iKviGDAiWPEhQnfrvj5FjWaVRhI4J4rROvnvNTOaAxwi0ujjLq8Meh0NAZsffh014Q="
		m1, err := base64.StdEncoding.DecodeString(st1)
		s2, err := RsaDecrypt(m1)
		if err != nil {
			t.Error(err)
		} else {
			t.Log(string(s2))
		}
	}
}

func TestPasswordEncrypt(t *testing.T) {
	source := "mimixixi"
	mid, err := EncryptPassword(source)
	if err != nil {
		t.Error(err)
	}
	result, err := DecryptPassword(mid)
	if err != nil {
		t.Error(err)
	}
	if result != source {
		t.Error(result, source)
	}
	t.Log(mid)
}

func BenchmarkGetRoleServcieInstance(b *testing.B) {
	b.ResetTimer()
	b.StartTimer()
	for i := 0; i < b.N; i++ {
		source := "mimixixi"
		mid, err := EncryptPassword(source)
		if err != nil {
			b.Error(err)
		}
		result, err := DecryptPassword(mid)
		if err != nil {
			b.Error(err)
		}
		if result != source {
			b.Error(result, source)
		}
	}

}

func TestBuildPassword4DB(t *testing.T) {
	result := BuildPassword4DB("123")
	exception := "6fb226e919977204cb4813ec8affd2bd"
	if exception != result {
		t.Error(exception, result)
	}
}

func BenchmarkBuildPassword4DB(b *testing.B) {
	b.ResetTimer()
	b.StartTimer()
	for i := 0; i < b.N; i++ {
		BuildPassword4DB("123")
	}
}