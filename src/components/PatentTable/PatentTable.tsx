import "./PatentTable.css";
import "../common/Table/Table.css";
import DepartmentSectionHeading from "../DepartmentSectionHeading/DepartmentSectionHeading";

import {
  grantedPatents,
  designPatents,
} from "../../data/patentData";

const PatentTable = () => {
  return (
    <div className="patent-page flex flex-direction-column">
      {/* First Table */}
      <section className="table-section">
        <DepartmentSectionHeading title="List of Patents Granted" className="department-section-heading--medium" />

        <div className="table-section__wrapper">
          <table className="table-section__table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Title of the Invention</th>
                <th>Inventors</th>
                <th>Application No.</th>
                <th>Current Status</th>
              </tr>
            </thead>

            <tbody>
              {grantedPatents.map((patent) => (
                <tr key={patent.id}>
                  <td>
                    <span className="table-section__cell">{patent.id}</span>
                  </td>

                  <td>
                    <span className="table-section__cell">{patent.title}</span>
                  </td>

                  <td>
                    <span className="table-section__cell">{patent.inventor}</span>
                  </td>

                  <td>
                    <span className="table-section__cell">
                      {patent.applicationNo}
                    </span>
                  </td>

                  <td>
                    <span className="table-section__cell">{patent.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Second Table */}
      <section className="table-section">
        <DepartmentSectionHeading title="List of Design Patents Granted" />

        <div className="table-section__wrapper">
          <table className="table-section__table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Dept</th>
                <th>Patent Name</th>
                <th>Patent Filing Country</th>
                <th>Application No.</th>
                <th>Name of the Person/Institution Holding the Patent</th>
              </tr>
            </thead>

            <tbody>
              {designPatents.map((patent) => (
                <tr key={patent.id}>
                  <td>
                    <span className="table-section__cell">{patent.id}</span>
                  </td>

                  <td>
                    <span className="table-section__cell">
                      {patent.department}
                    </span>
                  </td>

                  <td>
                    <span className="table-section__cell">
                      {patent.patentName}
                    </span>
                  </td>

                  <td>
                    <span className="table-section__cell">{patent.country}</span>
                  </td>

                  <td>
                    <span className="table-section__cell">
                      {patent.applicationNo}
                    </span>
                  </td>

                  <td>
                    <span className="table-section__cell">{patent.holder}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PatentTable;