import {PageBase} from './pageBase';

interface IHomePageProps{

}

interface IHomePageState{

}

export class HomePage extends PageBase<IHomePageProps,IHomePageState> {
    constructor(props: IHomePageProps){
        super(props);
    }
}