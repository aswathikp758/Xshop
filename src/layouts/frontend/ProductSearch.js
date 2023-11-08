import React,{ useState, useEffect } from 'react'

export default function ProductSearch() {

    const [allcountry, setAllcountry] = useState([]);
  const [filterresult, setFilterresult] = useState([]);
  const [serachcountry, setSearchcountry] = useState("");
  
  const handlesearch = (event) => {
    const search = event.target.value;
    console.log(search);
    setSearchcountry(search);
  
    if (search !== "") {
      const filterdata = allcountry&& allcountry.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFilterresult(filterdata);
    } else {
      setFilterresult(allcountry);
    }
  };
  
  useEffect(() => {
    const getcountry = async () => {
      const getres = await fetch("http://127.0.0.1:8000/api/products");
      const setcounty = await getres.json();
      console.log(setcounty.results);
      setAllcountry(await setcounty.results);
    };
    getcountry();
  }, []);
  return (
    <div>
          <div className="container">
        <div className="row"><h3>React JS Laravel 10 AutoComplete Textbox | Filter Search</h3>
          <div className="col-md-6 mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Keyword"
              onChange={(e) => {
                handlesearch(e);
              }}
            />
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Country ID </th>
                  <th>Country Name</th>
                </tr>
              </thead>
              <tbody>
                {serachcountry.length > 1
                  ? filterresult && filterresult.map((filtercountry, index) => (
                      <tr key={index}>
                        <td> {filtercountry.id} </td>
                        <td> {filtercountry.name} </td>
                      </tr>
                    ))
                  : allcountry && allcountry.map((getcon, index) => (
                      <tr key={index}>
                        <td> {getcon.id} </td>
                        <td> {getcon.name} </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
