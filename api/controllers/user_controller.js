const PDFDocument = require("pdfkit");
const path = require("path");
const publicPath = path.join(__dirname, "../../public");
const fs = require("fs");
const sql = require("mssql");
const doc = new PDFDocument();

const creaePdf = (data1, data2 = {}) => {
  var data = `
vcnid: ${data1.vcnid}
Name: ${data1.Name}
Age: ${data1.Age}
Sex: ${data1.Sex}
Email: ${data1.Email}
Dept: ${data1.Dept}
Manager: ${data1.Manager}

`;
  doc.pipe(fs.createWriteStream(`${publicPath}/${data1.vcnid}.pdf`));

  doc.fontSize(18).text(data, 100, 100);

  // Add another page

  var data2 = `
  Phone Number: ${data2.phone_number}
  Designation; ${data2.designation}
  Marital Status: ${data2.marriage_status}
  Employee Type: ${data2.employee_type}
  Blood Group: ${data2.blood_group}

  `;
  doc
    .addPage()
    .fontSize(18)
    .text(data2, 100, 100);
  doc.end();
};

module.exports.getPdf = async (req, res) => {
  //   let vcn = "A310917";
  var vcn = req.params.vcn;
  try {
    var result = await sql.query(
      `select * from dbo.volvo_crm where vcnid = '${vcn}' `
    );

    if (result.recordset.length == 0) {
      return res.send({
        success: false,
        message: "No record found"
      });
    }

    let data1 = result.recordset[0];

    var result2 = await sql.query(
      `select * from dbo.volvo_botdata where vcnid = '${vcn}' `
    );

    if (result2.recordset.length == 0) {
      return res.send({
        success: false,
        message: "No record found"
      });
    }

    let data2 = result2.recordset[0];
    creaePdf(data1, data2);

    return res.send({
      success: true,
      link: `https://damp-badlands-51941.herokuapp.com/public/${vcn}.pdf`
    });
  } catch (error) {
    console.log(error);
  }
};
