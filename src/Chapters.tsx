export function Chapters() {
  return (
    <div className="relative">
      <div className="absolute z-0 w-full h-10 bg-gradient-to-r from-blue-600 to-purple-600 blur animate"></div>
      <div className="relative z-10">
        <select
          className="w-full bg-gray-800 rounded"
          name="chapters"
          id="chapters"
        >
          <optgroup className="bg-gray-800" label="Introduction">
            <option value="introduction">What is React?</option>
            <option value="jsx">JSX</option>
            <option value="rendering">Rendering Elements</option>
          </optgroup>

          <optgroup className="bg-gray-800" label="Styling">
            <option value="css">CSS</option>
            <option value="css-in-js">CSS-in-JS</option>
            <option value="css-modules">CSS Modules</option>
            <option value="css-frameworks">CSS Frameworks</option>
          </optgroup>

          <optgroup className="bg-gray-800" label="Props">
            <option value="props">Components and Props</option>
          </optgroup>

          <optgroup className="bg-gray-800" label="State">
            <option value="state">State and Lifecycle</option>
            <option value="lifting-state">Lifting State Up</option>
            <option value="composition">Composition</option>
          </optgroup>

          <optgroup className="bg-gray-800" label="Events">
            <option value="events">Handling Events</option>
            <option value="forms">Forms</option>
          </optgroup>

          <optgroup className="bg-gray-800" label="Logic">
            <option value="conditionals">Conditional Rendering</option>
            <option value="lists">Lists and Keys</option>
          </optgroup>

          <optgroup className="bg-gray-800" label="Hooks">
            <option value="use-state">useState</option>
            <option value="use-effect">useEffect</option>
            <option value="use-reducer">useReducer</option>
            <option value="use-ref">useRef</option>
            <option value="use-context">useContext</option>
          </optgroup>

          <optgroup className="bg-gray-800" label="Animations">
            <option value="animations">Animations</option>
          </optgroup>
        </select>
      </div>
    </div>
  )
}
