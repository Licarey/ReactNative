package com.helloworld;
import android.graphics.Color;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.TextView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import java.util.Timer;
import java.util.TimerTask;


//需要注意，父类后的中括号中需要写上要包装的组件类
public class FlashView extends SimpleViewManager<TextView> {

    //上下文
    private static ThemedReactContext context;
    //原生UI组件 这里使用原生的TextView 当然也可以是自定医德
    private static TextView nativeView;
    //跑马灯开关
    static public boolean isflashing = false;
    //定时器
    private Timer timer;
    //进行跑马灯开关操作的方法
    Handler handler = new Handler(Looper.getMainLooper(),new Handler.Callback() {
        @Override
        public boolean handleMessage(Message msg) {
            if (msg.what == 1) {
                if (isflashing) {
                    nativeView.setTextColor(Color.rgb((int) (Math.random() * 255), (int) (Math.random() * 255), (int) (Math.random() * 255)));
                    nativeView.setBackgroundColor(Color.rgb((int) (Math.random() * 255), (int) (Math.random() * 255), (int) (Math.random() * 255)));
                    Log.e("e","1");
                }
            }else if(msg.what==2){
                if (!isflashing) {
                    if (timer==null){
                        timer = new Timer();
                        timer.schedule(task, 0, 1000);
                    }
                }
                isflashing = true;
            }else{
                isflashing = false;
            }
            return true;
        }
    });
    //定时器任务对象
    TimerTask task = new TimerTask() {
        @Override
        public void run() {
            // 需要做的事:发送消息
            Message msg = new Message();
            msg.what = 1;
            handler.sendMessage(msg);
        }
    };
    //实现这个方法来进行导出原生组件名称的设置
    @Override
    public String getName() {
        return "FlashView";
    }
    //实现这个方法来进行原生组件的创建
    @Override
    protected TextView createViewInstance(final ThemedReactContext reactContext) {
        this.context = reactContext;
        this.nativeView = new TextView(context);
        final FlashView self = this;
        //设置手势监听
        this.nativeView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                if(event.getAction() != MotionEvent.ACTION_UP){
                    return true;
                }
                WritableMap param = Arguments.createMap();
                param.putBoolean("flashing",isflashing);
                //调用JavaScript端的函数属性
                self.context.getJSModule(RCTEventEmitter.class).receiveEvent(
                        nativeView.getId(),
                        "topChange",
                        param
                );
                return true;
            }
        });
        return this.nativeView;
    }
    //导出属性
    @ReactProp(name="text")
    public void setText(TextView label,String text){
        this.nativeView.setText(text);
    }

    //导出方法
    @ReactMethod
    public void start(){
      Message m = new Message();
        m.what = 2;
        handler.sendMessage(m);
    }
    @ReactMethod
    public void stop(){
        Message m = new Message();
        m.what = 3;
        handler.sendMessage(m);
    }
}
