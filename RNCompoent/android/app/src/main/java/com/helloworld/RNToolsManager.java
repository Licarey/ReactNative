package com.helloworld;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


/**
 * Created by jaki on 2017/9/16.
 */

public class RNToolsManager extends ReactContextBaseJavaModule {

    public RNToolsManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNToolsManager";
    }

    @ReactMethod
    public void printf(String param1, String param2, Callback callback){
        Toast.makeText(getReactApplicationContext(),"andorid:"+param1+param2,Toast.LENGTH_LONG).show();
        callback.invoke("andorid:"+param1+param2);
    }

    @ReactMethod
    public void println(Boolean success, Promise promise){
        if (success){
            promise.resolve(("成功"));
        }else{
            promise.reject("0","失败");
        }
    }

}
