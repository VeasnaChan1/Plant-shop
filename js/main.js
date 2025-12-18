$(document).ready(function() {
            $('#menuBtn').on('click', function(e) {
                e.stopPropagation();
                $('#dropdownMenu').toggleClass('hidden');
            });

            // Close dropdown when clicking outside
            $(document).on('click', function(e) {
                if (!$(e.target).closest('#menuBtn').length && !$(e.target).closest('#dropdownMenu').length) {
                    $('#dropdownMenu').addClass('hidden');
                }
            });
        });