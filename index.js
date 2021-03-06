import {Select} from './Select/select'
import './Select/styles.sc.scss'

const select = new Select('#select', {
    placeholder: 'Выбери пожалуйста элемент',
    //selectedId: '2',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Nest'}
    ],
    onSelected(item) {
        console.log('Selected item:', item)
    }
});

window.s = select;
