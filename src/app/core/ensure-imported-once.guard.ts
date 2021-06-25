export abstract class EnsureImportedOnceModule {
    protected constructor(targetModule: any) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded.`);
        }
    }
}