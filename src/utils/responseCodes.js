export function response200(res, message, data, actions) {
  return res.status(200).json({
    status: 'OK',
    message,
    data,
    actions,
  });
}

export function response201(res, message, data) {
  return res.status(201).json({
    status: 'Inserted',
    message,
    data,
  });
}

export function response204(res, message) {
  return res.status(204).json({
    status: 'No content',
    message,
  });
}

export function response400(res, message) {
  return res.status(400).json({
    status: 'error',
    error: message,
    message: 'Bad request',
  });
}

export function response401(res, message) {
  return res.status(401).json({
    status: 'error',
    error: message,
    message: 'Unauthorized',
  });
}

export function response403(res, message) {
  return res.status(403).json({
    status: 'error',
    error: message,
    message: 'Forbidden',
  });
}

export function response404(res, message) {
  return res.status(404).json({
    status: 'error',
    error: message,
    message: 'Not found',
  });
}

export function response500(res, logMessage, err) {
  const message = err != null ? `${logMessage}: ${err}` : logMessage;

  // eslint-disable-next-line no-console
  console.debug(message);

  return res.status(500).json({
    status: 'error',
    error: `Something went wrong.\n${message}`,
    message: 'Internal server error',
  });
}
