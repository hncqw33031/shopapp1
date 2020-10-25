const STORAGE_NAME="shop";
class Storage{
	static getItem(name,modul=null){
		const storage=Storage.getStorage()
		if(modul===null){
			return storage[name]
		}else{
			if(Reflect.has(storage,modul)){
				return storage[modul][name]
			}else{
				return ""
			}
		}
	}
	static setItem(name,value){
		const storage=Storage.getStorage()
		storage[name]=value;
		Storage.setStorage(storage)
	}
	static getStorage(){
		return JSON.parse( sessionStorage.getItem(STORAGE_NAME)||"{}" )
	}
	static setStorage(value){
		sessionStorage.setItem(STORAGE_NAME,JSON.stringify(value))
	}
	static removeStorage(name,modul=null){
		const storage=Storage.getStorage()
		if(modul===null){
			delete storage[name]
			Storage.setStorage(storage)
		}else{
			if(Reflect.has(storage,modul)){
				delete storage[modul][name]
				Storage.setStorage(storage)
			}
		}
	}
	static clearStorage(){
		sessionStorage.removeItem(STORAGE_NAME)
	}
}

export {
	Storage
}