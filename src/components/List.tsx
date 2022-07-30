import React, {FC} from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

// чтобы корректно работали дженерики лучше делать не стрелочной функцией а обычной
export default function List<T>(props: ListProps<T>) {

    return (
        <div>
            {props.items.map(props.renderItem)}
        </div>
    )
}

