/**
 * Renders a 'dollar' icon. Credit: Up Banking.
 * @param {*} className to override styles of the icon. 
 */
export default function DollarIcon({ className }) {
  return (
    <svg className={className + " inline"} width="13" height="16" viewBox="0 0 13 16" fill="none">
      <path d="M8.37567 4.68195C7.20599 5.04989 5.91543 4.74511 4.70247 4.97545C4.16224 5.0849 3.63855 5.295 3.16325 5.61087C4.93016 6.61267 6.67034 7.57753 8.43725 8.57934C9.06528 8.94131 9.69331 9.30328 10.3838 9.47926C7.82028 9.98322 5.24021 10.3865 2.64869 10.6573M6.04859 1.46695C5.75082 5.56811 5.45305 9.66927 5.11833 13.7972" stroke="#FFEF6B" strokeWidth="1.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}
