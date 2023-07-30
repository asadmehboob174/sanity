const { createClient } = require('@sanity/client');

const projectId = "0fgdzppj";
const dataset = "production";
const apiVersion = "2023-01-01";

const config = {
  projectId: projectId,
  dataset: dataset,
  useCdn: false,
  apiVersion: apiVersion
};

async function handleForm(req: any, res: any) {
  const payload = JSON.parse(req.body);
  try {
    const result = await createClient(config).create(payload);
    return res.status(200).send('ok');
  } catch (error) {
    return res.status(500).send('error');
  }
}

export default handleForm;