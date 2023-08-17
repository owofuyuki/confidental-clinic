const LoginValidation = (values) => {
  let errors = {};
  const usernamePattern = /^[a-zA-Z0-9]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.username === "") {
    errors.username = "Tên đăng nhập không được để trống";
  } else if (!usernamePattern.test(values.username)) {
    errors.username = "Tên đăng nhập không phù hợp";
  } else {
    errors.username = "";
  }

  if (values.password === "") {
    errors.password = "Mật khẩu không được để trống";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "Mật khẩu không phù hợp";
  } else {
    errors.password = "";
  }

  return errors;
};

const SignupValidation = (values) => {
  let errors = {};
  const infoPattern = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  const phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  const usernamePattern = /^[a-zA-Z0-9]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.info === "") {
    errors.info = "Họ và tên không được để trống";
  } else if (!infoPattern.test(values.info)) {
    errors.info = "Họ và tên không phù hợp";
  } else {
    errors.info = "";
  }

  if (values.phone === "") {
    errors.phone = "Số điện thoại không được để trống";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Số điện thoại không phù hợp";
  } else {
    errors.phone = "";
  }

  if (values.username === "") {
    errors.username = "Tên đăng nhập không được để trống";
  } else if (!usernamePattern.test(values.username)) {
    errors.username = "Tên đăng nhập không phù hợp";
  } else {
    errors.username = "";
  }

  if (values.password === "") {
    errors.password = "Mật khẩu không được để trống";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "Mật khẩu không phù hợp";
  } else {
    errors.password = "";
  }

  return errors;
};

export { LoginValidation, SignupValidation };
