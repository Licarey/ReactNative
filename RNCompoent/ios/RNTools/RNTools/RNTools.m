//
//  RNTools.m
//  RNTools
//
//  Created by jaki on 2017/9/15.
//  Copyright © 2017年 jaki. All rights reserved.
//

#import "RNTools.h"

@implementation RNTools

RCT_EXPORT_MODULE(RNToolsManager);

RCT_REMAP_METHOD(printf,param:(NSString *)param param2:(NSString *)param2 param3:(RCTResponseSenderBlock)claaBack)
{
    NSString * string = [NSString stringWithFormat:@"这里是原生模块的Log:参数1-%@，参数2-%@|来自类:JavaScript",param,param2];
    claaBack(@[string]);
}

RCT_REMAP_METHOD(println,success:(BOOL)success resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
{
    if (success) {
        resolve(@[@"成功"]);
    }else{
        reject(0,@"失败",nil);
    }
}

@end
