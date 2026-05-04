import "./Admin.css";

export default function Admin() {
  const stats = [
    { title: "Total Packages", value: "14" },
    { title: "Reservations", value: "128" },
    { title: "Clients", value: "320" },
    { title: "Revenue", value: "$12.5K" },
  ];

  const bookings = [
    { name: "Sarah M.", trip: "Hurghada", status: "Confirmed" },
    { name: "Ahmed K.", trip: "Turkey Trip", status: "Pending" },
    { name: "Laura P.", trip: "Sharm El Sheikh", status: "Confirmed" },
  ];

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2>Egypt Holiday</h2>

        <nav>
          <a className="active">Dashboard</a>
          <a>Packages</a>
          <a>Reservations</a>
          <a>Users</a>
          <a>Settings</a>
        </nav>
      </aside>

      <main className="admin-main">
        <div className="admin-top">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your travel agency website professionally.</p>
          </div>

          <button>Add Package</button>
        </div>

        <div className="admin-stats">
          {stats.map((item, index) => (
            <div className="admin-stat-card" key={index}>
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>

        <div className="admin-content">
          <section className="admin-panel">
            <h2>Recent Reservations</h2>

            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Package</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.trip}</td>
                    <td>
                      <span className={item.status === "Confirmed" ? "status confirmed" : "status pending"}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="admin-panel small">
            <h2>Quick Actions</h2>
            <button>Edit Home</button>
            <button>Upload PDF</button>
            <button>Manage Packages</button>
          </section>
        </div>
      </main>
    </div>
  );
}