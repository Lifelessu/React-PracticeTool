var a = 12;
var b = 9;
const handleClick = () =>
{
  alert(a + b);
}

const handleValue = (number) =>
{
  alert(number);
}

const handleButton = (statement) =>
{
  alert(`Hello, ${statement}`);
}

const handeTwoValues = (number1, number2) =>
{
  var sum = number1 + number2;

  alert(`Total: ${sum}`);
}

const handleSubmit = (event) =>
{
    event.preventDefault();

    console.log(event.target.elements.fname.value);
    console.log(event.target.elements.lname.value);

    var a1 = event.target.elements.fname.value;
    var b1 = event.target.elements.lname.value

    //alert(a1 + b1);
    
    return <h1>{a1}</h1>
}

function Event()
{
    return (
        <div>
            <div>
                <div>
                    <button onClick={handleClick}>Get Sum</button><br></br>
                    <button onClick={() => handleValue(912)}>Pass Value</button><br></br>
                    <button onClick={() => handleButton("You Clicked Me")}>click</button><br></br>
                    <button onClick={() => handeTwoValues(12,23)}>Two Values</button><br></br>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input type="text" placeholder="Enter First Name" name="fname"></input>

                        <label>Last Name</label>
                        <input type="text" placeholder="Enter Last Name" name="lname"></input>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
      );
}

export default Event;
