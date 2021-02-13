

module.exports = {
     responseSucess(res, message, data = [], code = 200){

         const response = {
             status: 'sucess',
             message : message,
             code: code,
             data : data
         }

        return res.json(response);
    },

    responseError(res, message, data = [], code = 200){

        const response = {
            status: 'error',
            message : message,
            code: code,
            data : data
        }

        return res.json(response);
    }
};
