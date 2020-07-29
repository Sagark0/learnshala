<template>
    <div id="subjectMainPage">
        <v-app>
			<div id="grad">
				<v-container>
					<v-row justify="center" align="center">
						<!-- <v-col >
							<img :src="$route.params.img"/>
						</v-col> -->
						<v-col>
                            <div>Name</div>

							<!-- <div>Name: <span>{{ $route.params.name }}</span></div>
							<div>Description: <span>{{ $route.params.description }}</span></div> -->
						</v-col>
					</v-row>
					<v-row justify="center" align="center">
						<v-col>
							<v-btn class="indigo">MCQ</v-btn>
							<v-btn class="indigo">QnA</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</v-app>
    </div>
</template>