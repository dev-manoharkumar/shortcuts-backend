module.exports = ({env}) => ({
  // ...
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
  upload: {
    config: {
      provider: 'strapi-provider-upload-aws-s3-advanced',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          bucket: env('AWS_BUCKET_NAME'),
        },
        baseUrl: env("CDN_BASE_URL"),
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  }
});
