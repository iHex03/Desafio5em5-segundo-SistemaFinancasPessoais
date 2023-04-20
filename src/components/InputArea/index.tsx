import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) =>{
    
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2023, 4, 20),
            category: 'entertainment',
            title: 'Cinema',
            value: 14.50
        }
        
        onAdd(newItem);
    }
    
    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}