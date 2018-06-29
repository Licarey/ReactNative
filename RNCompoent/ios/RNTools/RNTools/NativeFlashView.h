//
//  NativeFlashView.h
//  RNTools
//
//  Created by jaki on 2017/9/18.
//  Copyright © 2017年 jaki. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/UIView+React.h>
@interface NativeFlashView : UILabel
//开启
-(void)start;
//关闭
-(void)stop;
//JavaScript回调
@property(nonatomic,copy)RCTBubblingEventBlock onPress;

@end
