//
//  FlashView.m
//  RNTools
//
//  Created by jaki on 2017/9/18.
//  Copyright © 2017年 jaki. All rights reserved.
//

#import "FlashView.h"
#import "NativeFlashView.h"

@interface FlashView()

@property(nonatomic,strong)NSString * text;

@property(nonatomic,strong)NativeFlashView * nativeView;
//手势
@property(nonatomic,strong)UITapGestureRecognizer * tap;
//标记状态
@property(nonatomic,assign)BOOL flashing;


@end

@implementation FlashView



RCT_EXPORT_MODULE(FlashView)

-(UIView *)view{
    return self.nativeView;
}

RCT_EXPORT_VIEW_PROPERTY(text, NSString*)

RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)

-(void)setText:(NSString *)text{
    self.nativeView.text = text;
}

-(NativeFlashView *)nativeView{
    if (!_nativeView) {
        _nativeView = [NativeFlashView new];
        [_nativeView addGestureRecognizer:self.tap];
    }
    return _nativeView;
}

-(UITapGestureRecognizer *)tap{
    if (!_tap) {
        _tap = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(tapClick)];
    }
    return _tap;
}

-(void)tapClick{
    self.nativeView.onPress(@{@"flashing":@(self.flashing)});
}

//导出原生方法
RCT_REMAP_METHOD(start, start){
    [self.nativeView start];
    self.flashing = YES;
}

RCT_REMAP_METHOD(stop, stop){
    [self.nativeView stop];
    self.flashing = NO;
}


@end
