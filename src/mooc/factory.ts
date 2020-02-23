import { CxCourseFactory, CxCourseCardFactory } from "./chaoxing/course";

export interface Mooc {
    Start(): void
}
export interface MoocFactory {
    CreateMooc(): Mooc
}

export function CreateMooc(): Mooc {
    let factory = PlatformChaoXing();
    if (factory != null) {
        return factory.CreateMooc();
    }
    return null
}

export function PlatformChaoXing(): MoocFactory {
    let url = document.URL;
    let factory: MoocFactory = null;
    if (url.indexOf("mycourse/studentstudy?") > 0) {
        factory = new CxCourseFactory();
    } else if (url.indexOf("knowledge/cards") > 0) {
        factory = new CxCourseCardFactory();
    }
    return factory;
}