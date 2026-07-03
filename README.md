# Decoriyans

**Handcrafted with Soul, Delivered with Care**

Decoriyans is an online ecommerce marketplace for hand-drafted artisan goods — pottery, textiles, woodwork, jewelry, home décor, and fine art from skilled craftspeople worldwide.

**Live site:** [decoriyans.com](https://decoriyans.com)

## Project Structure

```
decoriyans/
├── web/                    # Next.js 15 web application (static export)
├── mobile/                 # Expo React Native mobile app (iOS & Android)
├── infrastructure/         # AWS Terraform (Route 53, S3, CloudFront, ACM)
└── .github/workflows/      # CI/CD pipelines
```

## Web Application

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

### Features

- Product catalog with category filtering and search
- Product detail pages with artisan profiles
- Shopping cart with persistent local storage
- Checkout flow (Stripe-ready placeholder)
- Artisan directory
- About, Contact, Shipping & Returns, Privacy pages
- Responsive design for all screen sizes
- SEO-optimized with Open Graph metadata

### Local Development

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
cd web
npm run build    # outputs static files to web/out/
```

## Mobile Application

Built with **Expo SDK 52** and **React Native**, sharing the same product catalog and brand.

### Features

- Home screen with featured products
- Shop with product grid
- Product detail and add-to-cart
- Cart management and checkout
- Profile with contact info

### Local Development

```bash
cd mobile
npm install
npx expo start
```

Scan the QR code with Expo Go (iOS/Android) or press `w` for web preview.

> **Note:** Add icon assets to `mobile/assets/` (`icon.png`, `splash.png`, `adaptive-icon.png`, `favicon.png`) before building for app stores.

## AWS Infrastructure (decoriyans.com)

Terraform provisions:

| Resource | Purpose |
|----------|---------|
| **Route 53** | DNS hosted zone for `decoriyans.com` and `www.decoriyans.com` |
| **ACM** | SSL/TLS certificate (auto-validated via DNS) |
| **S3** | Static website hosting bucket |
| **CloudFront** | Global CDN with HTTPS |
| **Route 53 Records** | A/AAAA alias records pointing to CloudFront |

### Deploy Infrastructure

```bash
cd infrastructure/terraform
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars if needed

terraform init
terraform plan
terraform apply
```

After `terraform apply`, update your domain registrar's nameservers to the values in `terraform output nameservers`.

### Deploy Website

GitHub Actions automatically deploys on push to `main`. Required secrets:

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `S3_BUCKET_NAME` | From `terraform output s3_bucket_name` |
| `CLOUDFRONT_DISTRIBUTION_ID` | From `terraform output cloudfront_distribution_id` |

Manual deploy:

```bash
cd web && npm run build
aws s3 sync out/ s3://decoriyans.com-website/ --delete
aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"
```

## Domain Setup Checklist

1. Register `decoriyans.com` at your registrar (if not already owned)
2. Run `terraform apply` to create Route 53 hosted zone
3. Update registrar nameservers to Route 53 nameservers
4. Wait for DNS propagation (up to 48 hours)
5. ACM certificate validates automatically via DNS
6. Deploy website via GitHub Actions or manual S3 sync
7. Verify at `https://decoriyans.com`

## Tech Stack

| Layer | Technology |
|-------|------------|
| Web | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Mobile | Expo 52, React Native, TypeScript |
| Hosting | AWS S3 + CloudFront |
| DNS | AWS Route 53 |
| SSL | AWS Certificate Manager |
| CI/CD | GitHub Actions |
| IaC | Terraform |

## License

Proprietary — © 2026 Decoriyans. All rights reserved.
