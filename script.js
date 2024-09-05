// Handling image uploads and gallery display
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayImage(e.target.result);
        }
        reader.readAsDataURL(file);
        fileInput.value = '';
    }
});

// Function to display the image and create the review section
function displayImage(imageSrc) {
    const gallery = document.getElementById('gallery');

    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = imageSrc;
    galleryItem.appendChild(img);

    // Create Remove Button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove Image';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        gallery.removeChild(galleryItem); // Remove the image from the gallery
    });
    galleryItem.appendChild(removeButton);

    // Create Review Section
    const reviewSection = document.createElement('div');
    reviewSection.classList.add('review-section');

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Write your review...';
    reviewSection.appendChild(textarea);

    const submitReviewButton = document.createElement('button');
    submitReviewButton.innerText = 'Submit Review';
    submitReviewButton.addEventListener('click', function() {
        submitReview(galleryItem, textarea.value);
        textarea.value = ''; // Clear textarea after submission
    });
    reviewSection.appendChild(submitReviewButton);

    galleryItem.appendChild(reviewSection);
    gallery.appendChild(galleryItem);
}

// Function to handle the review submission
function submitReview(galleryItem, reviewText) {
    if (reviewText) {
        const reviewList = galleryItem.querySelector('.review-list') || document.createElement('div');
        reviewList.classList.add('review-list');

        const review = document.createElement('p');
        review.innerText = reviewText;

        reviewList.appendChild(review);
        galleryItem.appendChild(reviewList);
    } else {
        alert('Please write a review before submitting.');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Preload three dog images on page load
    const dogImages = [
        'https://placedog.net/400/300?id=1',
        'https://placedog.net/400/300?id=2',
        'https://placedog.net/400/300?id=3'
    ];

    dogImages.forEach(function(imageSrc) {
        displayImage(imageSrc);
    });
});

// Handling image uploads and gallery display
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayImage(e.target.result);
        }
        reader.readAsDataURL(file);
        fileInput.value = '';
    }
});

// Function to display the image and create the review section
function displayImage(imageSrc) {
    const gallery = document.getElementById('gallery');

    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = imageSrc;
    galleryItem.appendChild(img);

    // Create Remove Button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove Image';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function() {
        gallery.removeChild(galleryItem); // Remove the image from the gallery
    });
    galleryItem.appendChild(removeButton);

    // Create Review Section
    const reviewSection = document.createElement('div');
    reviewSection.classList.add('review-section');

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Write your review...';
    reviewSection.appendChild(textarea);

    const submitReviewButton = document.createElement('button');
    submitReviewButton.innerText = 'Submit Review';
    submitReviewButton.addEventListener('click', function() {
        submitReview(galleryItem, textarea.value);
        textarea.value = ''; // Clear textarea after submission
    });
    reviewSection.appendChild(submitReviewButton);

    galleryItem.appendChild(reviewSection);
    gallery.appendChild(galleryItem);
}

// Function to handle the review submission
function submitReview(galleryItem, reviewText) {
    if (reviewText) {
        const reviewList = galleryItem.querySelector('.review-list') || document.createElement('div');
        reviewList.classList.add('review-list');

        const review = document.createElement('p');
        review.innerText = reviewText;

        reviewList.appendChild(review);
        galleryItem.appendChild(reviewList);
    } else {
        alert('Please write a review before submitting.');
    }
}

