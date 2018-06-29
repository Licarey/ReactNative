//
//  NativeFlashView.m
//  RNTools
//
//  Created by jaki on 2017/9/18.
//  Copyright © 2017年 jaki. All rights reserved.
//

#import "NativeFlashView.h"

@interface NativeFlashView()

@property(nonatomic,strong)NSTimer * timer;

@end

@implementation NativeFlashView

- (instancetype)init
{
    self = [super init];
    if (self) {
        self.timer = [NSTimer scheduledTimerWithTimeInterval:1 target:self selector:@selector(flash) userInfo:nil repeats:YES];
        self.timer.fireDate = [NSDate distantFuture];
    }
    return self;
}

-(void)flash{
    self.textColor = [UIColor colorWithRed:arc4random()%255/255.0 green:arc4random()%255/255.0 blue:arc4random()%255/255.0 alpha:1];
    self.backgroundColor = [UIColor colorWithRed:arc4random()%255/255.0 green:arc4random()%255/255.0 blue:arc4random()%255/255.0 alpha:1];
}

-(void)start{
    self.timer.fireDate = [NSDate distantPast];
}

-(void)stop{
    self.timer.fireDate = [NSDate distantFuture];
}

@end
