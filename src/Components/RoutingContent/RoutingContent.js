import DropDownMenu from '../UtilComponents/DropDownMenu/DropDownMenu';

function RoutingContent() {
  return (
    <div className="row g-0 jsc-routing-content">
      <div className="col-sm-6 col-xxl-3 col-md-12 mb-3 mb-xxl-0">
        <div className="card">
          <div className="card-header d-flex flex-between-center py-2">
            <h6 className="mb-0">Topic</h6>
            <div className="dropdown font-sans-serif btn-reveal-trigger">
              <DropDownMenu></DropDownMenu>
            </div>
          </div>
          <div className="card-body py-2">
            boddy
          </div>
          
        </div>
      </div>
      
      
    </div>
  );
}

export default RoutingContent;
