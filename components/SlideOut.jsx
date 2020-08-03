import React from 'react'
import { CSSTransition } from 'react-transition-group'

const getPanelGlassStyle = (type, size, hidden) => {
  const horizontal = type === 'bottom' || type === 'top'
  return {
    width: horizontal ? `${hidden ? '0' : '100'}vw` : `${100 - size}vw`,
    height: horizontal ? `${100 - size}vh` : `${hidden ? '0' : '100'}vh`,
    ...(type === 'right' && { left: 0 }),
    ...(type === 'top' && { bottom: 0 }),
    position: 'inherit',
  }
}

const getPanelStyle = (type, size) => {
  const horizontal = type === 'bottom' || type === 'top'
  return {
    width: horizontal ? '100vw' : `${size}vw`,
    height: horizontal ? `${size}vh` : '100%',
    ...(type === 'right' && { right: 0 }),
    ...(type === 'bottom' && { bottom: 0 }),
    position: 'inherit',
    overflow: 'auto',
  }
}

const SlideOut = ({
  type,
  size,
  panelContainerClassName,
  panelClassName,
  isOpen,
  onOpen,
  onOpening,
  onOpened,
  onClose,
  onClosing,
  onClosed,
  backdropClicked,
  noBackdrop,
  children,
}) => {
  const glassBefore = type === 'right' || type === 'bottom'
  const horizontal = type === 'bottom' || type === 'top'
  return (
    <>
      {
        isOpen &&
        <style jsx global>
          {`
                    body {
                        overflow hidden;
                        width: 100%;
                        }
                    `}
        </style>
      }
      <div>
        <div className={`sliding-panel-container  ${isOpen ? 'active z-50 h-full' : ''} ${noBackdrop ? 'click-through' : ''}`}>
          <CSSTransition
            in={isOpen}
            timeout={500}
            classNames={`panel-container-${type}`}
            unmountOnExit
            onEnter={(node, isAppearing) => onOpen(node, isAppearing)}
            onEntering={(node, isAppearing) => onOpening(node, isAppearing)}
            onEntered={(node, isAppearing) => onOpened(node, isAppearing)}
            onExit={(node) => onClose(node)}
            onExiting={(node) => onClosing(node)}
            onExited={(node) => onClosed(node)}
            style={{ display: horizontal ? 'block' : 'flex' }}
          >
            <div className="h-full">
              {glassBefore && (
                <div
                  className="glass"
                  style={getPanelGlassStyle(type, size, noBackdrop)}
                  onClick={(e) => { if (!noBackdrop) backdropClicked(e) }}
                />
              )}
              <div className={`panel ${panelContainerClassName || ''}`} style={getPanelStyle(type, size)}>
                <div className={`panel-content ${panelClassName || ''}`}>{children}</div>
              </div>
              {!glassBefore && (
                <div
                  className="glass"
                  style={getPanelGlassStyle(type, size, noBackdrop)}
                  onClick={(e) => { if (!noBackdrop) backdropClicked(e) }}
                />
              )}
            </div>
          </CSSTransition>
        </div>
      </div>
    </>
  )
}

SlideOut.defaultProps = {
  type: 'left',
  size: 50,
  panelClassName: '',
  panelContainerClassName: '',
  onOpen: () => null,
  onOpening: () => null,
  onOpened: () => null,
  onClose: () => null,
  onClosing: () => null,
  onClosed: () => null,
  backdropClicked: () => null,
  noBackdrop: false,
  children: null,
}

export default SlideOut
