import simpleRestProvider from "ra-data-simple-rest";
import {DataProvider, withLifecycleCallbacks} from "react-admin";

console.log(import.meta.env.VITE_BACKEND_URL)
export const dataProvider = withLifecycleCallbacks(simpleRestProvider(
        // import.meta.env.VITE_SIMPLE_REST_URL,
        // TODO url
        "https://geekdrive.ru/api/"
    ), [{
        resource: 'models',
        beforeUpdate: async (params, dataProvider: DataProvider) => {
            // const newPictures = params.data.picture.filter(picture => picture.rawFile instanceof File)
            console.log(params)
            // TODO несколько файлов
            let updatedBase64ImageSrc = params.data.updatedBase64ImageSrc;
            let pictures;
            let base64GalleryPictures;
            let newGalleryPictures;
            if (params.data.galleryImages) {
                newGalleryPictures = params.data.galleryImages.filter(picture => picture.rawFile instanceof File)
                base64GalleryPictures = await Promise.all(
                    newGalleryPictures.map(convertFileToBase64)
                )
            }


            if (updatedBase64ImageSrc) {
                const newMainPictures = [updatedBase64ImageSrc].filter(picture => picture.rawFile instanceof File)

                console.log(newMainPictures)

                const base64Pictures = await Promise.all(
                    newMainPictures.map(convertFileToBase64)
                )

                pictures = [
                    ...base64Pictures.map((dataUrl, index) => ({
                        src: dataUrl,
                        title: newMainPictures[index].title,
                    })),
                    // ...formerPictures,
                ];
            }

            return {
                ...params,
                data: {
                    ...params.data,
                    updatedBase64ImageSrc: updatedBase64ImageSrc ? pictures[0].src : params.data.base64ImageSrc,
                    galleryImages: newGalleryPictures.length > 0 ? base64GalleryPictures : params.data.galleryImages?.map(image =>image.src)
                }
            }
        },
        beforeCreate: async (params, dataProvider: DataProvider) => {
            console.log(params)
            // const newPictures = params.data.picture.filter(picture => picture.rawFile instanceof File)
            const newMainPictures = [params.data.base64ImageSrc].filter(picture => picture.rawFile instanceof File)
            const newGalleryPictures = params.data.galleryImages.filter(picture => picture.rawFile instanceof File)
            console.log(newGalleryPictures)

            let base64GalleryPictures;
            if (params.data.galleryImages) {
                const newGalleryPictures = params.data.galleryImages.filter(picture => picture.rawFile instanceof File)
                base64GalleryPictures = await Promise.all(
                    newGalleryPictures.map(convertFileToBase64)
                )
            }

            const base64Pictures = await Promise.all(
                newMainPictures.map(convertFileToBase64)
            )

            const pictures = [
                ...base64Pictures.map((dataUrl, index) => ({
                    src: dataUrl,
                    title: newMainPictures[index].title,
                })),
                // ...formerPictures,
            ];


            console.log(base64GalleryPictures)
            console.log(pictures)
            return {
                data: {
                    ...params.data,
                    // TODO пока одна отка, а если надо несколько ?
                    base64ImageSrc: pictures[0].src,
                    galleryImages: base64GalleryPictures
                }
            }
        }
    }])
;
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });
// export const dataProvider:DataProvider = {
//     create<RecordType, ResultRecordType>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
//         return Promise.resolve(undefined);
//     },
//     delete<RecordType>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     deleteMany<RecordType>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     getMany<RecordType>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     getManyReference<RecordType>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     getOne<RecordType>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
//         const response = await fetch(`http://localhost:3000/${resource}`)
//         const data = await response.json()
//         console.log(data)
//         return {data,total:data.length}
//     },
//     update<RecordType>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     updateMany<RecordType>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
//         return Promise.resolve(undefined);
//     },
//     getList: async (resource, params) =>{
//         const response = await fetch(`http://localhost:3000/${resource}`)
//         const data = await response.json()
//         console.log(data)
//         return {data,total:data.length}
//     }
// }