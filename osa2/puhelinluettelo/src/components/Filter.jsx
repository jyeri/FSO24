const Filter = ({text, value, handleFilterChange}) => {
    return (
      <div>
        <h3>Search</h3>
        <div>
          {text}
          <input 
            value={value}
            onChange={handleFilterChange}
          />
        </div>
      </div>
    )
}

export default Filter