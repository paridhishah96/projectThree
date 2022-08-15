const ChartForm = ({handleChange, userChoice}) => {
    return (
        <div className="wrapper">
                <form>
                    <label htmlFor="countrySelect">Select a Country to See their Top 10 Songs </label>
                    <select 
                    id="countrySelect" 
                    name="countrySelect"
                    value={userChoice}
                    onChange={handleChange}>
                        <option value="placeholder" disabled>Pick one:</option>
                        <option value="ar">Argentina</option>
                        <option value="au">Australia</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="cn">China</option>
                        <option value="cr">Costa Rica</option>
                        <option value="cu">Cuba</option>
                        <option value="fr">France</option>
                        <option value="in">India</option>
                        <option value="it">Italy</option>
                        <option value="za">South Africa</option>
                        <option value="kr">South Korea</option>
                        <option value="ng">Nigeria</option>
                        <option value="rw">Rwanda</option>
                        <option value="us">United States of America</option>
                    </select>           
                </form>
            </div>
    )
}

export default ChartForm;