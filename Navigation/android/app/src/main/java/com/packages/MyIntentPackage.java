package com.packages;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.module.MyIntentModule;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by liming on 2018/4/20.
 * email liming@finupgroup.com
 */
public class MyIntentPackage implements ReactPackage {
    public MyIntentModule myIntentModule;

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        myIntentModule = new MyIntentModule(reactContext);
        return Arrays.<NativeModule>asList(myIntentModule);
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    public MyIntentModule getMyIntentModule() {
        return myIntentModule;
    }
}
