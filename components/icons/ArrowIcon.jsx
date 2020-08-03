/**
 * Renders an 'arrow' icon. Credit: Up Banking.
 * @param {*} className to override styles of the icon. 
 */
export default function ArrowIcon({ className }) {
  return (
    <svg className={className ? className : "h-4 w-4"} width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="1" d="M1.85303 5.56377L4.85623 9.03882C5.04792 9.26063 5.04792 9.63031 4.85623 9.85213C4.79233 9.92606 4.66453 10 4.53674 10C4.40894 10 4.28115 9.92606 4.21725 9.85213L-8.6938e-07 4.97227L4.15335 0.166359C4.34505 -0.0554521 4.66454 -0.0554521 4.85623 0.166359C5.04792 0.388171 5.04792 0.757857 4.85623 0.979668L1.85303 4.45471L1.34185 4.97227L1.85303 5.56377Z" fill="currentColor" />
    </svg>
  )
}
