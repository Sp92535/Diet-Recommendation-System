import './Model.css'
export default function Model() {

    const alterVal = (event) => {
        let x = parseInt(event.target.parentNode.firstChild.value);
        x += event.target.innerText == '+' ? 1 : - 1;
        event.target.parentNode.firstChild.value = x
    }

    const alterMeal = (event) => {
        let y = document.getElementById("mealsCurr");
        y.innerText = event.target.value
    }

    const alterActivity = (event) => {
        let y = document.getElementById("curr")
        switch (event.target.value) {
            case "0":
                y.innerHTML = 'Little/No Exercise';
                break;
            case "1":
                y.innerHTML = 'Light Exercise';
                break;
            case "2":
                y.innerHTML = 'Moderate Exercise (3-5 days/wk)';
                break;
            case "3":
                y.innerHTML = 'Very Active (6-7 days/wk)';
                break;
            case "4":
                y.innerHTML = 'Extra Active (very active and physical job)';
                break;
            default:
                y.innerHTML = '';
        }
    }

    let csrfToken = document.querySelector('meta[name="csrf-token"]').content;
    return (
        <div className="form-box d-flex justify-content-center" id="model">
            <form action='process/' method='POST'>
                <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />

                <h2 style={{ textAlign: 'center' }}>Diet Recommender</h2>
                <p>Modify the values and click the Generate button to use</p>

                <div className="form-group">
                    <label htmlFor="age">Age (years)</label>
                    <div className="age-input">
                        <input type="number" id="age" min="0" max="100" defaultValue="18" name='age-check' />
                        <button type="button" onClick={alterVal}>+</button>
                        <button type="button" onClick={alterVal}>-</button>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="height">Height (cm)</label>
                    <div className="age-input">
                        <input type="number" id="height" min="0" max="240" defaultValue="160" name='height-check' />
                        <button type="button" onClick={alterVal}>+</button>
                        <button type="button" onClick={alterVal}>-</button>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="weight">Weight (kg)</label>
                    <div className="age-input">
                        <input type="number" id="weight" min="0" max="500" defaultValue="60" name='weight-check' />
                        <button type="button" onClick={alterVal}>+</button>
                        <button type="button" onClick={alterVal}>-</button>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="gender" >Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="male" id="male" />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="female" id="female" />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                </div>

                <div className="mb-3">
                    <input id="myRange" min="0" max="4" step="1" type="range" className="form-range" onChange={alterActivity} name='act-check' />
                    <h5>
                        Activity Level:
                        <span id="curr">Moderate Exercise (3-5 days/wk)</span>
                    </h5>
                </div>

                <div className="mb-3">
                    <label htmlFor="weight-loss-plan">Choose your weight loss plan:</label>
                    <select id="weight-loss-plan" className="form-select" name='plan-check'>
                        <option value="maintain-weight">Maintain Weight</option>
                        <option value="mild-weight-loss">Mild Weight Loss</option>
                        <option value="weight-loss">Weight Loss</option>
                        <option value="extreme-weight-loss">Extreme Weight Loss</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input id="mealsRange" min="3" max="4" step="1" type="range" className="form-range" onChange={alterMeal} name='meal-check' />
                    <h5>
                        Meals per Day:
                        <span id="mealsCurr">4</span>
                    </h5>
                </div>
                <br />
                <button type="submit" className="btn btn-primary" id="Generate">Generate</button>
            </form>
        </div >
    );
}