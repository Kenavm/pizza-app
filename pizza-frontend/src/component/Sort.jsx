import "./Sort.css";

export default function Sort(props) {
    return (
    <div>
        <select
        className="sort-filters"
        onChange={(e) => props.isSetSorted(e.target.value)}
        >
            <option value={""} key={""}></option>
            <option value={"Sort by name ascending"} key={"Sort by name ascending"}>Sort by name ascending</option>
            <option value={"Sort by name descending"} key={"Sort by name descending"}>Sort by name descending</option>
            <option value={"Sort by price ascending"} key={"Sort by price ascending"}>Sort by price ascending</option>
            <option value={"Sort by price descending"} key={"Sort by price descending"}>Sort by price descending</option>
        
        </select>
    </div>
    )
}