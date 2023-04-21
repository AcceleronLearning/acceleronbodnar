<script>
  import { spring } from 'svelte/motion';

  let className = ''
  export { className as class }

  export let backgroundImage;
  export let title;
  export let description;
  export let linkURL;
  export let linkText = 'Learn More';
  export let linkTarget = '_blank'
  // https://acceleroncom.s3.amazonaws.com/ACCELERON_PRACTICAL_LIFE_SKILLS.pdf
  //export let classNames = 0;

</script>

<div class="col-md-4 col-sm-6 project image-holder {className}">
	<div class="ebor-project-container">
		<div class="background-image-holder">
			<img class="background-image" alt="Background Image" src="{backgroundImage}" />
		</div>
		<div class="hover-state">
			<div class="align-vertical">
				<h3 class="text-white">
					<strong>{title}</strong>
				</h3>
				<a
					href="{linkURL}" 
					target="{linkTarget}"
					class="btn btn-primary btn-white">{linkText}</a
				>
			</div>
		</div>
	</div>
</div>
