
class StateService {

    private values: { [ key: string ] : any; } = {};

    public getValue<T>(key: string): T {
        return this.values[key];
    }

    public setValue(key: string, value: any) {
        this.values[key] = value;
    }

}

export const AppStateService =  new StateService();