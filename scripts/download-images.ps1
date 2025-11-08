# Download placeholder images

Write-Host "Creating placeholder images directory..."
$imageDir = "public/images"

if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir | Out-Null
}

$images = @{
    "hero-poster.jpg" = "https://source.unsplash.com/1600x900/?darjeeling,mountains"
    "hero-mobile.jpg" = "https://source.unsplash.com/800x1200/?darjeeling,mountains"
    "darjeeling.jpg" = "https://source.unsplash.com/800x600/?darjeeling,tea"
    "sikkim.jpg" = "https://source.unsplash.com/800x600/?sikkim,monastery"
    "kalimpong.jpg" = "https://source.unsplash.com/800x600/?himalaya,mountain"
    "founder.jpg" = "https://source.unsplash.com/400x600/?indian,businessman"
    "driver-1.jpg" = "https://source.unsplash.com/400x400/?indian,driver"
    "driver-2.jpg" = "https://source.unsplash.com/400x400/?indian,chauffeur"
    "driver-3.jpg" = "https://source.unsplash.com/400x400/?indian,taxi"
    "testimonial-1.jpg" = "https://source.unsplash.com/100x100/?indian,person"
    "og-image.jpg" = "https://source.unsplash.com/1200x630/?darjeeling,taxi"
    "logo.png" = "https://via.placeholder.com/150x40/ffffff/000000?text=DarjeelingCabs"
}

Write-Host "Downloading placeholder images..."
foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $imageDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "Done! Remember to replace these with actual site images before deployment."