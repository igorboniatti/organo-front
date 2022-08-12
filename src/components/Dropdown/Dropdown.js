import './Dropdown.css';

export const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(_itemBuilder)}
            </select>
        </div>
    );
}

const _itemBuilder = (item) => (<option key={item}>{item}</option>);