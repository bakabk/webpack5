declare module '*.midule.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.scss'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'