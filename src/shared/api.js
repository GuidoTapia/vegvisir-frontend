import axios from "axios";

const apiUrl = "http://a1e0-190-237-34-153.ngrok.io";

const register = (email, password) => {
  axios
    .post(`${apiUrl}/auth/register`, {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const login = (email, password) => {
  axios
    .post(`${apiUrl}/auth/login`, {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createWorkspace = (urlPath) => {
  axios
    .post(`${apiUrl}/workspace/create`, {
      urlPath,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const sendInvitation = (email) => {
  axios
    .post(`${apiUrl}/auth/send-invitation`, {
      email,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const validateInvitation = (id) => {
  axios
    .get(`${apiUrl}/auth/validate-invitation?id=${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const invitedMember = (email) => {
  axios
    .get(`${apiUrl}/user/invited?email=${email}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getWorkspaceMembers = () => {
  axios
    .get(`${apiUrl}/workspace/members`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getOffices = (workspaceId) => {
  axios
    .get(`${apiUrl}/workspace/offices?workspaceId=${workspaceId}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getFloors = (offficeId) => {
  axios
    .get(`${apiUrl}/workspace/floors?offficeId=${offficeId}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  register,
  login,
  createWorkspace,
  sendInvitation,
  validateInvitation,
  invitedMember,
  getWorkspaceMembers,
  getOffices,
  getFloors,
};
