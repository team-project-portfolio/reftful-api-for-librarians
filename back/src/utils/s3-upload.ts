import s3 from '../configs/aws-s3';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const generateUploadURL = async (fileName: string) => {
  const params = {
    Bucket: 'librarian-api',
    Key: `${Date.now()}`,
    ContentType: 'image',
  };
  const command = new PutObjectCommand(params);

  const signedURL = await getSignedUrl(s3, command, { expiresIn: 180 });
  return signedURL;
};

export { generateUploadURL };
