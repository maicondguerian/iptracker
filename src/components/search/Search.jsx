import React, { useRef, useState } from 'react'
import { Styled } from '../../styles'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose  } from "react-icons/io";


const Input = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);

  return (
    <Styled.InputContainer $isFocused={isFocused}>
      <h1>IP Address Tracker</h1>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <input type="text"
          placeholder='Search for any IP adreass or domain'
          ref={inputRef}
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button>
          <MdKeyboardArrowRight color='#fff' size={29} />
        </button>
        {inputValue && (
          <button
            tabIndex="-1"
            id='delete_input'
            onFocus={() => {
              setInputValue('')
              setIsFocused(true);
              inputRef.current?.focus();
            }}
          >
            <IoMdClose size={25} />
          </button>
        )}
      </div>
    </Styled.InputContainer>
  )
};

export default Input