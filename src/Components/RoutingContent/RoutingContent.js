import DropDownMenu from '../UtilComponents/DropDownMenu/DropDownMenu';

function RoutingContent() {
  return (
    <div className="row g-0">
      <div className="col-sm-6 col-xxl-3 pe-sm-2 mb-3 mb-xxl-0">
        <div className="card">
          <div className="card-header d-flex flex-between-center bg-light py-2">
            <h6 className="mb-0">Active Users</h6>
            <div className="dropdown font-sans-serif btn-reveal-trigger">
              <DropDownMenu></DropDownMenu>
            </div>
          </div>
          <div className="card-body py-2">
            <div className="d-flex align-items-center mb-3">
              <div className="avatar avatar-2xl status-online">
                <img className="rounded-circle" src="assets/img/team/1-thumb.png" alt="" />
              </div>
              <div className="flex-1 ms-3">
                <h6 className="mb-0 fw-semi-bold"><a className="text-900" href="pages/profile.html">Emma Watson</a></h6>
                <p className="text-500 fs--2 mb-0">Admin</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar avatar-2xl status-online">
                <img className="rounded-circle" src="assets/img/team/2-thumb.png" alt="" />
              </div>
              <div className="flex-1 ms-3">
                <h6 className="mb-0 fw-semi-bold"><a className="text-900" href="pages/profile.html">Antony Hopkins</a></h6>
                <p className="text-500 fs--2 mb-0">Moderator</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar avatar-2xl status-away">
                <img className="rounded-circle" src="assets/img/team/3-thumb.png" alt="" />
              </div>
              <div className="flex-1 ms-3">
                <h6 className="mb-0 fw-semi-bold"><a className="text-900" href="pages/profile.html">Anna Karinina</a></h6>
                <p className="text-500 fs--2 mb-0">Editor</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar avatar-2xl status-offline">
                <img className="rounded-circle" src="assets/img/team/4-thumb.png" alt="" />
              </div>
              <div className="flex-1 ms-3">
                <h6 className="mb-0 fw-semi-bold"><a className="text-900" href="pages/profile.html">John Lee</a></h6>
                <p className="text-500 fs--2 mb-0">Admin</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar avatar-2xl status-offline">
                <img className="rounded-circle" src="assets/img/team/5-thumb.png" alt="" />
              </div>
              <div className="flex-1 ms-3">
                <h6 className="mb-0 fw-semi-bold"><a className="text-900" href="pages/profile.html">Rowen Atkinson</a></h6>
                <p className="text-500 fs--2 mb-0">Editor</p>
              </div>
            </div>
          </div>
          <div className="card-footer bg-light p-0"><a className="btn btn-sm btn-link d-block w-100 py-2" href="pages/people.html">All active users<span className="fas fa-chevron-right ms-1 fs--2"></span></a></div>
        </div>
      </div>
      <div className="col-sm-6 col-xxl-3 ps-sm-2 order-xxl-1 mb-3 mb-xxl-0">
        <div className="card h-100">
          <div className="card-header bg-light d-flex flex-between-center py-2">
            <h6 className="mb-0">Bandwidth Saved</h6>
            <div className="dropdown font-sans-serif btn-reveal-trigger"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" id="dropdown-bandwidth-saved" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2"></span></button>
              <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-bandwidth-saved"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
              </div>
            </div>
          </div>
          <div className="card-body d-flex flex-center flex-column">
            <div className="progress-circle progress-circle-dashboard" data-options='{"color":"url(#gradient)","progress":93,"strokeWidth":5,"trailWidth":5}'></div>
            <div className="text-center mt-4">
              <h6 className="fs-0 mb-1"><span className="fas fa-check text-success me-1" data-fa-transform="shrink-2"></span>35.75 GB saved</h6>
              <p className="fs--1 mb-0">38.44 GB total bandwidth</p>
            </div>
          </div>
          <div className="card-footer bg-light py-2">
            <div className="row flex-between-center">
              <div className="col-auto"><select className="form-select form-select-sm">
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                  <option>Last 2 Year</option>
                </select></div>
              <div className="col-auto"><a className="fs--1" href="#!">Help</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-6 px-xxl-2">
        <div className="card h-100">
          <div className="card-header bg-light py-2">
            <div className="row flex-between-center">
              <div className="col-auto">
                <h6 className="mb-0">Top Products</h6>
              </div>
              <div className="col-auto d-flex"><a className="btn btn-link btn-sm me-2" href="#!">View Details</a>
                <div className="dropdown font-sans-serif btn-reveal-trigger"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" id="dropdown-top-products" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--2"></span></button>
                  <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-top-products"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                    <div className="dropdown-divider"></div><a className="dropdown-item text-danger" href="#!">Remove</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body h-100">
            <div className="echart-bar-top-products h-100" data-echart-responsive="true"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutingContent;
