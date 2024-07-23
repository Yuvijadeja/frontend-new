import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Tooltip } from 'react-bootstrap'

function PopOver(params) {
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      {params.children}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement={params.placement}
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <i className={params.icon}></i>
    </OverlayTrigger>
  );
}

export default PopOver