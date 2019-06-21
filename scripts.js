      // create the model for the E-R diagram
      var nodeDataArray = [
        {
          key: "Products",
          items: [{ name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad },
          { name: "ProductName", iskey: false, figure: "Cube1", color: bluegrad },
          { name: "SupplierID", iskey: false, figure: "Decision", color: "purple" },
          { name: "CategoryID", iskey: false, figure: "Decision", color: "purple" }]
        },
        {
          key: "Suppliers",
          items: [{ name: "SupplierID", iskey: true, figure: "Decision", color: yellowgrad },
          { name: "CompanyName", iskey: false, figure: "Cube1", color: bluegrad },
          { name: "ContactName", iskey: false, figure: "Cube1", color: bluegrad },
          { name: "Address", iskey: false, figure: "Cube1", color: bluegrad }]
        },
        {
          key: "Categories",
          items: [{ name: "CategoryID", iskey: true, figure: "Decision", color: yellowgrad },
          { name: "CategoryName", iskey: false, figure: "Cube1", color: bluegrad },
          { name: "Description", iskey: false, figure: "Cube1", color: bluegrad },
          { name: "Picture", iskey: false, figure: "TriangleUp", color: redgrad }]
        },
        {
          key: "Order Details",
          items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad },
          { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad },
          { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad },
          { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad },
          { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 2", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 3", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 4", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 5", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 6", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, 
          { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad },
          { name: "Property1", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property2", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property3", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property4", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property5", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property6", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property7", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property8", iskey: false, figure: "MagneticData", color: greengrad }],
        },
        {
          key: "Sample Entity 7", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 8", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 9", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 10", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 11", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 12", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 13", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 14", items: [
            { name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, 
            { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, 
            { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, 
            { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, 
            { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property1", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property2", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property3", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property4", iskey: false, figure: "MagneticData", color: greengrad },
            { name: "Property5", iskey: false, figure: "MagneticData", color: greengrad }],
        },
        {
          key: "Sample Entity 15", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        {
          key: "Sample Entity 16", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        },
        // {
        //   key: "Sample Entity 17", items: [{ name: "OrderID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "ProductID", iskey: true, figure: "Decision", color: yellowgrad }, { name: "UnitPrice", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Quantity", iskey: false, figure: "MagneticData", color: greengrad }, { name: "Discount", iskey: false, figure: "MagneticData", color: greengrad }]
        // },
      ];
      var linkDataArray = [
        { from: "Products", to: "Suppliers", text: "0..N", toText: "1" },
        { from: "Products", to: "Categories", text: "0..N", toText: "1" },
        { from: "Order Details", to: "Products", text: "0..N", toText: "1" },
        { from: "Sample Entity 2", to: "Sample Entity 3", text: "0..N", toText: "1" },
        { from: "Sample Entity 2", to: "Sample Entity 4", text: "0..N", toText: "1" },
        { from: "Sample Entity 2", to: "Sample Entity 5", text: "0..N", toText: "1" },
        { from: "Sample Entity 5", to: "Sample Entity 6", text: "0..N", toText: "1" },
        { from: "Sample Entity 5", to: "Sample Entity 7", text: "0..N", toText: "1" },
        { from: "Sample Entity 5", to: "Sample Entity 8", text: "0..N", toText: "1" },
        { from: "Sample Entity 8", to: "Sample Entity 11", text: "0..N", toText: "1" },
        { from: "Sample Entity 8", to: "Sample Entity 12", text: "0..N", toText: "1" },
        { from: "Sample Entity 12", to: "Sample Entity 11", text: "0..N", toText: "1" },
        { from: "Sample Entity 11", to: "Sample Entity 13", text: "0..N", toText: "1" },
        { from: "Sample Entity 9", to: "Sample Entity 7", text: "0..N", toText: "1" },
        { from: "Sample Entity 9", to: "Sample Entity 6", text: "0..N", toText: "1" },
        { from: "Sample Entity 14", to: "Sample Entity 15", text: "0..N", toText: "1" },
        { from: "Sample Entity 15", to: "Sample Entity 16", text: "0..N", toText: "1" },
        { from: "Sample Entity 16", to: "Sample Entity 14", text: "0..N", toText: "1" },
        // { from: "Sample Entity 4", to: "Sample Entity 17", text: "0..N", toText: "1" },
        { from: "Sample Entity 4", to: "Sample Entity 10", text: "0..N", toText: "1" },
      ];