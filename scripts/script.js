document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var propertyNumber = document.getElementById('propertyNumber').value.trim();
    var ownerName = document.getElementById('ownerName').value.trim();

    if (!propertyNumber || !ownerName) {
        alert("Both fields are required.");
        return;
    }

    console.log('Property Number:', propertyNumber);
    console.log('Owner Name:', ownerName);

    // Simulate fetching data (replace with actual data fetching)
    var loanData = [
        { id: 'L0001', propertyNumber: 'P0001', owner: 'Jahnavi', amount: '10065', status: 'Rejected', date: '2023-11-02' },
        { id: 'L0002', propertyNumber: 'P0002', owner: 'muthumari', amount: '34471', status: 'Pending', date: '2014-02-14' },
        { id: 'L0003', propertyNumber: 'P0003', owner: 'harshitha', amount: '48599', status: 'Rejected', date: '2019-08-25' },
        { id: 'L0004', propertyNumber: 'P0004', owner: 'kullayi reddy', amount: '32459', status: 'Rejected', date: '2020-03-31' },
        { id: 'L0005', propertyNumber: 'P0005', owner: 'ramana', amount: '22331', status: 'Rejected', date: '2010-03-04' },
        { id: 'L0006', propertyNumber: 'P0006', owner: 'jyoshna', amount: '40552', status: 'Rejected', date: '2014-07-06' },
        { id: 'L0007', propertyNumber: 'P0007', owner: 'subadra', amount: '43937', status: 'Approved', date: '2016-02-08' },
        { id: 'L0008', propertyNumber: 'P0008', owner: 'Karthik', amount: '30605', status: 'Approved', date: '2010-08-01' },
        { id: 'L0009', propertyNumber: 'P0009', owner: 'Gnana', amount: '22870', status: 'Pending', date: '2015-09-05' },
        { id: 'L0010', propertyNumber: 'P0010', owner: 'sreedevi', amount: '35690', status: 'Approved', date: '2013-09-28' },
        { id: 'L0011', propertyNumber: 'P0011', owner: 'pragathi', amount: '17667', status: 'Approved', date: '2016-01-27' },
        { id: 'L0012', propertyNumber: 'P0012', owner: 'gayathri', amount: '30992', status: 'Approved', date: '2021-08-30' },
        { id: 'L0013', propertyNumber: 'P0013', owner: 'charan', amount: '21583', status: 'Rejected', date: '2019-11-14' },
        { id: 'L0014', propertyNumber: 'P0014', owner: 'vijay', amount: '47360', status: 'Rejected', date: '2018-01-13' },
        { id: 'L0015', propertyNumber: 'P0015', owner: 'Loshika', amount: '15139', status: 'Rejected', date: '2021-06-22' },
        { id: 'L0016', propertyNumber: 'P0016', owner: 'tanuja', amount: '33155', status: 'Approved', date: '2012-04-26' },
        { id: 'L0017', propertyNumber: 'P0017', owner: 'Navya', amount: '27613', status: 'Approved', date: '2011-04-27' },
        { id: 'L0018', propertyNumber: 'P0018', owner: 'Loshika', amount: '45801', status: 'Approved', date: '2015-06-08' },
        { id: 'L0019', propertyNumber: 'P0019', owner: 'meghana', amount: '49071', status: 'Approved', date: '2021-03-29' },
        { id: 'L0020', propertyNumber: 'P0020', owner: 'Keerthi', amount: '16105', status: 'Approved', date: '2018-10-29' },
        { id: 'L0021', propertyNumber: 'P0021', owner: 'maha', amount: '12609', status: 'Approved', date: '2016-09-23' },
        { id: 'L0022', propertyNumber: 'P0022', owner: 'Loshika', amount: '18747', status: 'Pending', date: '2013-11-30' },
        { id: 'L0023', propertyNumber: 'P0023', owner: 'Charitha', amount: '40974', status: 'Pending', date: '2013-04-24' },
        { id: 'L0024', propertyNumber: 'P0024', owner: 'hari', amount: '24835', status: 'Pending', date: '2015-11-20' },
        { id: 'L0025', propertyNumber: 'P0025', owner: 'gayathri', amount: '45019', status: 'Approved', date: '2023-08-12' },
        { id: 'L0026', propertyNumber: 'P0026', owner: 'yuva teja', amount: '40974', status: 'Rejected', date: '2021-09-08' },
        { id: 'L0027', propertyNumber: 'P0027', owner: 'Keerthi', amount: '8425', status: 'Approved', date: '2015-10-08' },
        { id: 'L0028', propertyNumber: 'P0028', owner: 'pawan', amount: '17585', status: 'Approved', date: '2011-10-05' },
        { id: 'L0029', propertyNumber: 'P0029', owner: 'Navya', amount: '18444', status: 'Pending', date: '2015-05-27' },
        { id: 'L0030', propertyNumber: 'P0030', owner: 'kullayi reddy', amount: '28922', status: 'Pending', date: '2023-02-01' },
        { id: 'L0031', propertyNumber: 'P0031', owner: 'supriya', amount: '29618', status: 'Approved', date: '2016-10-14' },
        { id: 'L0032', propertyNumber: 'P0032', owner: 'Bhanu', amount: '23864', status: 'Approved', date: '2011-08-10' },
        { id: 'L0033', propertyNumber: 'P0033', owner: 'siri', amount: '20890', status: 'Rejected', date: '2024-02-09' },
        { id: 'L0034', propertyNumber: 'P0034', owner: 'Keerthi', amount: '30249', status: 'Approved', date: '2024-07-20' },
        { id: 'L0035', propertyNumber: 'P0035', owner: 'hema', amount: '5307', status: 'Approved', date: '2018-07-27' },
        { id: 'L0036', propertyNumber: 'P0036', owner: 'maha', amount: '8371', status: 'Approved', date: '2023-10-27' },
        { id: 'L0037', propertyNumber: 'P0037', owner: 'pawan', amount: '7027', status: 'Pending', date: '2020-11-01' },
        { id: 'L0038', propertyNumber: 'P0038', owner: 'Keshav', amount: '15175', status: 'Pending', date: '2011-10-29' },
        { id: 'L0039', propertyNumber: 'P0039', owner: 'savithri', amount: '11716', status: 'Pending', date: '2021-03-31' },
        { id: 'L0040', propertyNumber: 'P0040', owner: 'charan', amount: '14839', status: 'Approved', date: '2014-03-15' },
        { id: 'L0041', propertyNumber: 'P0041', owner: 'sai leela', amount: '34106', status: 'Approved', date: '2010-05-06' },
        { id: 'L0042', propertyNumber: 'P0042', owner: 'meghana', amount: '38986', status: 'Approved', date: '2018-07-28' },
        { id: 'L0043', propertyNumber: 'P0043', owner: 'hema', amount: '10340', status: 'Approved', date: '2023-04-26' },
        { id: 'L0044', propertyNumber: 'P0044', owner: 'sai kiran', amount: '7575', status: 'Approved', date: '2015-08-13' },
        { id: 'L0045', propertyNumber: 'P0045', owner: 'LEkha', amount: '8348', status: 'Approved', date: '2010-05-01' },
        { id: 'L0046', propertyNumber: 'P0046', owner: 'Jyothi', amount: '9914', status: 'Rejected', date: '2017-02-15' },
        { id: 'L0047', propertyNumber: 'P0047', owner: 'pragathi', amount: '16759', status: 'Pending', date: '2010-12-19' },
        { id: 'L0048', propertyNumber: 'P0048', owner: 'Jyothi', amount: '31159', status: 'Rejected', date: '2023-07-08' },
        { id: 'L0049', propertyNumber: 'P0049', owner: 'pragathi', amount: '13196', status: 'Pending', date: '2022-02-04' }
    ];

    

    // Filter data based on input
    var filteredData = loanData.filter(function(loan) {
        return loan.propertyNumber.toLowerCase() === propertyNumber.toLowerCase() &&
               loan.owner.toLowerCase() === ownerName.toLowerCase();
    });

    console.log('Filtered Data:', filteredData);

    var tableBody = document.getElementById('loanTableBody');
    tableBody.innerHTML = ''; // Clear existing data

    if (filteredData.length === 0) {
        // If no data found, show a message
        var noDataRow = document.createElement('tr');
        noDataRow.innerHTML = '<td colspan="6">No loans found for the provided details.</td>';
        tableBody.appendChild(noDataRow);
    } else {
        filteredData.forEach(function(loan) {
            var row = document.createElement('tr');
            row.innerHTML = `<td>${loan.id}</td>
                             <td>${loan.propertyNumber}</td>
                             <td>${loan.owner}</td>
                             <td>${loan.amount}</td>
                             <td>${loan.status}</td>
                             <td>${loan.date}</td>`;
            tableBody.appendChild(row);
        });
    }
});