package patches.buildTypes

import jetbrains.buildServer.configs.kotlin.v2018_2.*
import jetbrains.buildServer.configs.kotlin.v2018_2.buildSteps.ScriptBuildStep
import jetbrains.buildServer.configs.kotlin.v2018_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2018_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the buildType with id = 'Build'
accordingly, and delete the patch script.
*/
changeBuildType(RelativeId("Build")) {
    expectSteps {
    }
    steps {
        insert(0) {
            script {
                name = "Install"
                scriptContent = "npm install"
                dockerImage = "node:dubnium"
                dockerImagePlatform = ScriptBuildStep.ImagePlatform.Linux
                dockerPull = true
            }
        }
        insert(1) {
            script {
                name = "Test"
                scriptContent = "npm test"
                dockerImage = "node:dubnium"
                dockerImagePlatform = ScriptBuildStep.ImagePlatform.Linux
                dockerPull = true
            }
        }
    }
}
