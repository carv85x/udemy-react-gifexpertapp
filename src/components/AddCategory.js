import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // Previene POST y refresh al presionar ENTER
        e.preventDefault();

        
        if( inputValue.trim().length > 2 ) {
            setCategories( categories => [inputValue, ...categories] );
            setInputValue(' ')
        }

    }

    return (

        <form onSubmit={ handleSubmit }>
            {/* <h1> { InputValue } </h1> */}
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


